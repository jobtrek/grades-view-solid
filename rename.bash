# This script address the temporary issue of nitro not generating
# the correct file extension for pre rendered html pages.

mv ./.output/public/index ./.output/public/index.html
mv ./.output/public/grades/cie ./.output/public/grades/cie.html
mv ./.output/public/grades/english ./.output/public/grades/english.html
mv ./.output/public/grades/epsic ./.output/public/grades/epsic.html
mv ./.output/public/grades/math ./.output/public/grades/math.html
mv ./.output/public/grades/soci ./.output/public/grades/soci.html
