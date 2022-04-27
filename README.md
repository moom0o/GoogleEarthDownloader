# GoogleEarthDownloader
Download the entirety of Google Earth, in your selected quality!

# Warning
Please note this is a project meant for Educational and Archival purposes. I am not responsible for any of your actions. Web scraping is legal in the United States, according to https://www.courtlistener.com/opinion/6460342/hiq-labs-inc-v-linkedin-corporation. I am not responsible if this program is used in other countries, either on a personal computer or server located in other countries.

# Express Server
The Express server is used for mimicking Google's actual API. It can be used in any kind of mapping software, one good example is OpenStreetMaps where it is possible to use the locally downloaded map data for viewing.
# Config
**Quality** - Set your quality, (1-21) higher number will mean images are more zoomed in, thus using much more space. Math
problem for amount of images is (2^quality)(2^quality)=number of 256x256 images. For example, using quality 3, you will
have 64 256x256 pixel images total. (2^3)*(2^3)=64

The other options are currently not implemented yet, and may never be. They were intended to be used if you only want a
certain section of the world.