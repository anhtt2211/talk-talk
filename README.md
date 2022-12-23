# Talk talk

### Demo App

Check out demo [here](https://talk-talk-git-develop-anhtt2211.vercel.app/)

## Meeting Features

- [x] Real-time video and audio conferencing
- [x] Enable/disable camera
- [x] Mute/unmute mic
- [x] Chat
- [x] Raise hand
- [x] Screen share
- [x] Recording

## Interactive Live Streaming Features

#### Host

- [x] Enable/disable camera
- [x] Mute/unmute mic
- [x] Poll
- [x] Chat
- [x] Raise hand
- [x] Screen share
- [x] Recording
- [x] HLS

#### Viewer

- [x] Reactions
- [x] Poll
- [x] Raise hand

### Prerequisites

- React Js 16 or later
- Node 10 or later

## Run the Sample App

### Step 1: Clone the sample project

Clone the repository to your local environment.

```js
git clone https://github.com/anhtt2211/talk-talk.git
```

### Step 2: Copy the .env.example file to .env file.

Open your favorite code editor and copy `.env.example` to `.env` file.

```js
cp.env.example.env;
```

### Step 3: Modify .env file

Generate temporary token from [Video SDK Account](https://app.videosdk.live/signup).

```js title=".env"
REACT_APP_VIDEOSDK_TOKEN = "TEMPORARY-TOKEN";
```

### Step 4: Install the dependecies

Install all the dependecies to run the project.

```js
npm install
```

### Step 5: Run the Sample App

Bingo, it's time to push the launch button.

```js
npm run start
```

## Project Description

> **Note :**
>
> - **main** branch: Meeting and Interactive live streaming with better UI includes basic features.
> - **design/v1** branch: Simple UI with all features and methods.

## Use case types

- **Meeting** - In `Meeting` you can enable mic and webcam, record the meeting, raise hand, chat, share your screen.

- **Interactive Live Streaming** - In `Interactive Live Streaming` you can join as a host or viewer.
  - As a host, you can start and stop live streaming, create and launch a poll and also use features that are available in the `Meeting` use case.
  - As a viewer, you can watch live streaming, give reaction, raise hand, chat and submit a poll.

## Project Structure

There are 2 folders :

1. [`meeting`](https://github.com/anhtt2211/talk-talk/tree/develop/src/meeting) - This folder includes components or file related to meeting.
2. [`interactive-live-streaming`](https://github.com/anhtt2211/talk-talk/tree/develop/src/interactive-live-streaming) - This folder includes all components or file related to Interactive Live Streaming.

## Authors

- [Trần Thế Anh](https://github.com/anhtt2211/)
- [Phan Ngọc Quang](https://github.com/quangpn24/)
