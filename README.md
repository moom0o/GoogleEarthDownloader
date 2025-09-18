# GoogleEarthDownloader
<img width="624" height="407" alt="image" src="https://github.com/user-attachments/assets/6574ad6a-b896-4beb-af65-24d0c5acd066" />

Download the entirety of Google Earth, in your selected quality! Also run your own express server to host the images and use on other mapping platforms like openstreetmap!

# Warning
Please note this is a project meant for Educational and Archival purposes. I am not responsible for any of your actions. Web scraping is legal in the United States, according to https://www.courtlistener.com/opinion/6460342/hiq-labs-inc-v-linkedin-corporation. I am not responsible if this program is used in other countries, either on a personal computer or server located in other countries.

# Express Server
The Express server is used for mimicking Google's actual API. It can be used in any kind of mapping software, one good example is OpenStreetMaps where it is possible to use the locally downloaded map data for viewing.
# Config
**Quality** - Set your quality, (1-21) higher number will mean images are more zoomed in, thus using much more space. Formula for amount of images is (2^quality)(2^quality)=number of 256x256 images. For example, using quality 3, you will
have 64 256x256 pixel images total. (2^3)*(2^3)=64

# Tutorial
* Clone the repo
* Update config.json with your preferred quality, NOTE that exponentially more images must be downloaded for every increase in quality!
* Run node index.js to create a list of urls to download. Note if the url has changed in the future open dev tools and find the url used for google maps images.
* Once the list.txt is fully created you can download the files with ./start.sh (linux) it will download in parallel.
* Once your images are downloaded, run npm install and node server.js, and you will be able to run a local mimick of Google's API. This can be used on Openstreetmaps editor or other mapping programs.

### Use http://localhost:42069/kh/v=1001?x={x}&y={y}&z={zoom} in openstreetmap editor or your favorite mapping software and zoom to the correct zoom to view your images!!
<img width="631" height="635" alt="image" src="https://github.com/user-attachments/assets/aeec4169-41cd-4ba8-9ba8-1c2135bd9a20" />

# Estimated download size guide
| Quality | Image Files   | (~8KB/img) |
|---------|---------------|------------|
| 0       | 1             | 8KB        |
| 1       | 4             | 32KB       |
| 2       | 16            | 128KB      |
| 3       | 64            | 512KB      |
| 4       | 256           | 2MB        |
| 5       | 1024          | 8MB        |
| 6       | 4096          | 32MB       |
| 7       | 16384         | 128MB      |
| 8       | 65536         | 512MB      |
| 9       | 262144        | 2GB        |
| 10      | 1048576       | 8GB        |
| 11      | 4194304       | 32GB       |
| 12      | 16777216      | 128GB      |
| 13      | 67108864      | 512GB      |
| 14      | 268435456     | 2TB        |
| 15      | 1073741824    | 8TB        |
| 16      | 4294967296    | 32TB       |
| 17      | 17179869184   | 128TB      |
| 18      | 68719476736   | 512TB      |
| 19      | 274877906944  | 2PB        |
| 20      | 1099511627776 | 8PB        |
| 21      | 4398046511104 | 32PB       |