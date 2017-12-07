THUMB_DIR="thumbnails"

if [ ! -d "${THUMB_DIR}" ];
then
  mkdir ${THUMB_DIR}
fi

for JPG in *.jpg; do
  THUMB_NAME="$(basename ${JPG} .jpg)-sm.jpg"
  convert ${JPG} -resize 200 ${THUMB_NAME}
  mv ${THUMB_NAME} ${THUMB_DIR}
  echo "Converted ${THUMB_NAME}"
done
