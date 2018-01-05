require 'fileutils'
require "i18n"

module Jekyll

  class LunrIndexGenerator < Generator
    safe true

    def generate(site)

      @site = site
      @lunr_meta = @site.config['lunr']
      @collections = @site.collections

      @dir  = "js"

      @idx_path = @dir + "/" + "lunr-index.js"
      @ui_path = @dir + "/" + "lunr-ui.js"

      def clean(string)
        return string.gsub(/\A---(.|\n)*?---/, " ").gsub(/<\/?[^>]*>/, " ").gsub("\n", " ").gsub("\t", " ").gsub('"',"'")
      end

      def transliterate(string)
        I18n.available_locales = [:en]
        return I18n.transliterate(string.force_encoding("utf-8"))
      end

      unless @lunr_meta.to_s.empty?

        front_matter = "---\nlayout: null\n---\n"
        index_string = "\nvar index = elasticlunr(function () {\nthis.setRef('lunr_id');\n"
        store_string = "\nvar store = [\n"
        ui_string = "\n$(document).ready(function() {\n$('input#search').on('keyup', function () {\nvar resultdiv = $('#results');\nvar query = $(this).val();\nvar result = index.search(query, {expand: true});\nresultdiv.empty();\nfor (var item in result) {\nvar ref = result[item].ref;\nvar searchitem = '<div class=\"result\"><b><a href=\"' + store[ref].link + '\" class=\"result-title\">' + store[ref].title + '</a></b><br><p class=\"result-meta\">'\n"

        total_fields = []
        count = 0


        @lunr_meta.each { |idx| total_fields += idx['fields'] }
        if total_fields.uniq.empty?
          raise "wax:lunr :: fields are not properly configured. aborting."
        else
          total_fields.uniq.each do |f|
            index_string += "\nthis.addField(" + "'" + f + "'" + "); "
            unless f == "title"
              ui_string += " + store[ref]." + f + " + ' / '"
            end
          end
          ui_string += " + store[ref].content + ' / '"
          index_string += "\nthis.addField(" + "'content'" + ");\nthis.saveDocument(false); });"
        end

        @lunr_meta.each do |idx|
          @collections.each do |collection|
            collection = collection[1]
            if idx['collection'] == collection.label
              collection.docs.each do |item|
                hash = Hash.new
                hash['lunr_id'] = count
                hash['link'] =  "{{ site.baseurl }}" + item.url
                idx['fields'].each { |f| hash[f] = transliterate(item[f].to_s) }
                if idx['content']
                  hash['content'] = transliterate(clean(item.content.to_s))
                end
                index_string += "\nindex.addDoc(" + hash.to_json + "); "
                store_string += "\n" + hash.to_json + ", "
                count += 1
              end
            end
          end
        end

        store_string = store_string.chomp(", ") + "];"
        ui_string = ui_string.chomp(" / '") + "</p></div>';\nresultdiv.append(searchitem);}\n});\n});"

        # puts "writing lunr index to " + @idx_path
        FileUtils.mkdir_p @dir
        File.open(@idx_path, 'w') { |file| file.write( front_matter + index_string + store_string ) }
        unless File.exists?(@ui_path)
          puts "writing default ui to " + @ui_path
          File.open(@ui_path, 'w') { |file| file.write( front_matter + ui_string ) }
        end
      end
    end
  end
end
