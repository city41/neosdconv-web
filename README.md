# neosdconv-web

This is [neosdconv](https://github.com/city41/neosdconv) running in a website. So instead of having to install Node and use the command line to convert a ROM to .neo, you can just drag your files onto the website.

Deployed here: https://toneosd.mattgreer.dev/

## implementation

neosdconv-web uses neosdconv internally, and it all happens client side. If you were wondering why neosdconv switched from Buffers to Uint8Arrays, this is why.
