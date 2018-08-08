# Scanner

Sends images from a remote web client to a server.

## Requirements

* [`node`](https://nodejs.org)

## Setting up HTTPS

The server will not work unless the following files exist in the directory:

* `cert/cert.pem`
* `cert/key.pem`
* `cert/pass.txt`

In order to generate the above files, run the following shell script:

```sh
mkdir cert && openssl req -newkey rsa:2048 -new -nodes -keyout cert/key.pem -out cert/cert.pem && touch cert/pass.txt
```

## Usage

1. Run `npm install` to install dependencies
2. Run `npm start` to start the script
3. Open [https://localhost:3000](https://localhost:3000) to open the web client
4. Alternatively, open [https://<your-computer-name-here>:3000] to open it in another device connected to the same network
5. Take a picture and view it inside `/data/file0.jpg`