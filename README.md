# TinyPNG Compressor :zap:

A Plugin for Sketch that compresses your bitmap assets using TinyPNG API. This Plugin requires Sketch 3.8.

Please note that the compression is slightly lossy, check out [TinyPNG website](https://tinypng.com/) for more info

## Installation

- Download [Sketch TinyPNG Compressor](https://github.com/alxrm/sketch-tinypng-compressor/releases/download/v2.0.0/Sketch.TinyPng.compressor.sketchplugin.zip) & unzip it.
- Double click **Sketch TinyPNG Compressor.sketchplugin** to install the Plugin.

## Setup

The pipeline is pretty straightforward:
- Get your API token on [TinyPNG website](https://tinypng.com/), you have to be authorized, the token includes 500 free compressions per month
- Then go to `Plugins > Sketch TinyPNG compressor > Enter TinyPNG API key`

![](https://github.com/alxrm/sketch-tinypng-compressor/blob/master/images/menu.png?raw=true)

- Paste the token into the dialog

![](https://github.com/alxrm/sketch-tinypng-compressor/blob/master/images/apikey.png?raw=true)

You're all set now!

## Usage
- Just select the slices you wish to export as `jpg` or `png` (_other formats are not supported, unfortunately_) and export them as usual
- After a couple of seconds you'll see the message saying the export was successful:

![](https://github.com/alxrm/sketch-tinypng-compressor/blob/master/images/success.png?raw=true)

## Look at me 

__Sometimes TinyPNG API can respond with internal server error for whatever reason (especially when you're exporting a large image), in such cases you can try again, and that might help, though for some images it never helps. I hope to fix it in future releases__

Anyway if you're exporting a bunch of small png icons or something like that — you should be fine :ok_hand:

## LICENSE

The MIT License (MIT)

Copyright (c) 2016 The Plugin Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
