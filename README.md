# Video SDK for React JS

[![Documentation](https://img.shields.io/badge/Read-Documentation-blue)](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/getting-started)
[![Discord](https://img.shields.io/discord/876774498798551130?label=Join%20on%20Discord)](https://discord.gg/kgAvyxtTxv)
[![Register](https://img.shields.io/badge/Contact-Know%20More-blue)](https://app.videosdk.live/signup)

At Video SDK, we’re building tools to help companies create world-class collaborative products with capabilities of live audio/videos, compose cloud recordings/rtmp/hls and interaction APIs

## Demo App

Check out demo [here](https://videosdk.live/prebuilt/demo)

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

<br/>

## Setup Guide

- Sign up on [VideoSDK](https://app.videosdk.live/) and visit [API Keys](https://app.videosdk.live/api-keys) section to get your API key and Secret key.

- Get familiarized with [API key and Secret key](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/signup-and-create-api)

- Get familiarized with [Token](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/server-setup)

<br/>

### Prerequisites

- React Js 16 or later
- Node 10 or later
- Valid [Video SDK Account](https://app.videosdk.live/signup)

## Run the Sample App

### Step 1: Clone the sample project

Clone the repository to your local environment.

```js
git clone https://github.com/videosdk-live/videosdk-rtc-react-sdk-example.git
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

<br/>

## Key Concepts

- `Meeting` - A Meeting represents Real time audio and video communication.

  **`Note : Don't confuse with Room and Meeting keyword, both are same thing 😃`**

- `Sessions` - A particular duration you spend in a given meeting is a referred as session, you can have multiple session of a particular meetingId.
- `Participant` - Participant represents someone who is attending the meeting's session, `local partcipant` represents self (You), for this self, other participants are `remote participants`.
- `Stream` - Stream means video or audio media content that is either published by `local participant` or `remote participants`.

<br/>

## Token Generation

Token is used to create and validate a meeting using API and also initialise a meeting.

🛠️ `Development Environment`:

- You may use a temporary token for development. To create a temporary token, go to VideoSDK [dashboard](https://app.videosdk.live/api-keys) .

🌐 `Production Environment`:

- You must set up an authentication server to authorise users for production. To set up an authentication server, refer to our official example repositories. [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples)

> **Note** :
>
> Development environment tokens have a 7-day expiration period.

<br/>

## API: Create and Validate meeting

- `create meeting` - Please refer this [documentation](https://docs.videosdk.live/api-reference/realtime-communication/create-room) to create meeting.
- `validate meeting`- Please refer this [documentation](https://docs.videosdk.live/api-reference/realtime-communication/validate-room) to validate the meetingId.

<br/>

## Project Description

<br/>

> **Note :**
>
> - **main** branch: Meeting and Interactive live streaming with better UI includes basic features.
> - **design/v1** branch: Simple UI with all features and methods.

<br/>

## Use case types

- **Meeting** - In `Meeting` you can enable mic and webcam, record the meeting, raise hand, chat, share your screen.

- **Interactive Live Streaming** - In `Interactive Live Streaming` you can join as a host or viewer.
  - As a host, you can start and stop live streaming, create and launch a poll and also use features that are available in the `Meeting` use case.
  - As a viewer, you can watch live streaming, give reaction, raise hand, chat and submit a poll.

<br/>

## Project Structure

There are 2 folders :

1. [`meeting`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/tree/main/src/meeting) - This folder includes components or file related to meeting.
2. [`interactive-live-streaming`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/tree/main/src/interactive-live-streaming) - This folder includes all components or file related to Interactive Live Streaming.

<br/>

## Common components

**1. Create or join Meeting**

- [`components/screens/JoiningScreen.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/components/screens/JoiningScreen.js) : It shows the user with the option to meeting type and create or join a meeting and to initiate webcam and mic status.

- `api.js` : It includes all the API calls for create and validate meeting.

- If you select `Meeting` type and click `Create Meeting`, it will show following:

  - `MeetingId` - You can copy this meetingId and share it with other participants that wants to join the meeting.
  - `TextField for ParticipantName` - This text field will contain name of the participant.
  - `Start Meeting Button` - This button will call api to create meeting with meetingId that participant want to join.

  <p align="center">
  <img width="600" height="338" src="public/create_meeting.gif"/>
  </p>

- If you select `Meeting` type and click `Join Meeting`, it will show following:

  - `TextField for MeetingId` - This text field will contain the meeting Id that you want to join.
  - `TextField for ParticipantName` - This text field will contain name of the participant.
  - `Join Meeting Button` - This button will call api to validate meeting with meetingId that participant want to join.

  <p align="center">
  <img width="600" height="338" src="public/join_meeting.gif"/>
  </p>

- If you select `Interactive Live Streaming` type and click `Join as a Host`, it will show following:

  - `Studio code` - You can copy this studio code and share with other participants that wants to join the meeting.
  - `TextField for ParticipantName` - This text field will contain name of the participant.
  - `Join Studio Button` - This button will call api to create meeting with studio code that participant want to join.

  <p align="center">
  <img width="600" height="338" src="public/join_studio.gif"/>
  </p>

- If you select `Interactive Live Streaming` type and click `Join as a Viewer`, it will show following:

  - `TextField for StudioCode` - This text field will contain the studio code that you want to join.
  - `TextField for ParticipantName` - This text field will contain name of the participant.
  - `Join Streaming Room Button` - This button will call api to validate meeting with studio code that viewer want to join.

  <p align="center">
  <img width="600" height="338" src="public/join_streaming_room.gif"/>
  </p>

**2. PresenterView**

[`components/PresenterView.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/components/PresenterView.js) - It contains the view when participant share their screen.

<p align="center">
<img width="600" height="338" src="public/presenter-view.gif"/>
</p>

**3. ParticipantView**

[`components/ParticipantView.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/components/ParticipantView.js) - It contains single participant video and corner display name.

**4. ParticipantGrid**

[`components/ParticipantGrid.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/components/ParticipantGrid.js) - It contains the grid of participant that are displayed in the main screen.

**5. ParticipantList**

[`sidebar/ParticipantPanel.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/components/sidebar/ParticipantPanel.js) - This file is used to show the list of participants present in the meeting.

<p align="center">
<img width="600" height="338" src="public/participant_list.gif"/>
</p>

**6. Chat**

[`sidebar/ChatPanel.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/components/sidebar/ChatPanel.js) - It contains the chat side panel with chat input and chat messages list.

<p align="center">
<img width="600" height="338" src="public/chat.gif"/>
</p>

**7. Waiting Screen**

[`components/screens/WaitingToJoin.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/components/screens/WaitingToJoinScreen.js) - It contains the lottie animation with messages. Untill you receive `isMeetingJoined` true from `meeting` that you intialize using `useMeeting()` from `@videosdk.live/react-sdk`, this screen will be displayed.

<p align="center">
<img width="600" height="338" src="public/waiting-screen.gif"/>
</p>

**8. Leave Screen**

[`components/screens/LeaveScreen.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/components/screens/LeaveScreen.js) - This file contains the leave screen.

<p align="center">
<img width="600"  src="public/leave-screen.png"/>
</p>

**9. SidebarContainer**

- [`components/sidebar/SidebarContainer.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/components/sidebar/SidebarContainer.js) - It containes `Participanel`, `ChatPanel`, `CreatePoll`, `PollList` and `SubmitPollList` component rendering.

<br/>

## Meeting Project Structure

**1. MeetingContainer** : It contains the `PresenterView` , `ParticipantView`, `SidebarContainer` and `BottomBar`.

**2. Meeting Bottom Bar**

- [`meeting/components/BottomBar.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/meeting/components/BottomBar.js): It contains the buttons that are displayed in bottom of the screen.

  - Starting from left it shows meetingId with copy icon button.
  - In middle, it shows recording indicator, raise hand icon button, mic icon button with available mics list, webcam icon button with available webcam list, screen share and leave meeting icon button.
  - In right most corner, it shows chat icon button and partcipants icon with participant count.

  - When screen resolution change to mobile, tab or lg screen, the order of bottom bar elements changes to leave meeting button, recording button, mic & webcam button and `more actions` button.
  - On click of `more actions` button it opens a drawer that contains other remaining buttons.

<p align="center">
<img width="1363" src="public/bottombar.png"/>
</p>

**3. ParticipantView**

- [`meeting/components/ParticipantView.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/meeting/components/ParticipantView.js) - It contains the grid of participant that are displayed in the main screen.

<p align="center">
<img width="600" height="338" src="public/participant_view.png"/>
</p>

## Interactive Live Streaming Project Structure

**1. ILSContainer** : It contains the `TopBar`, `PresenterView` , `ILSParticipantView`, `HLSContainer` ,`SidebarContainer` and `ILSBottomBar`.

**2. ILSBottomBar**

- [`interactive-live-streaming/components/ILSBottomBar.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/ILSBottomBar.js): It contains the buttons that are displayed in bottom of the screen.
  create a poll, submit a poll, end poll , draft a poll and remove poll from draft pubsub methods.

  - Starting from left it shows studioCode with copy icon button.
  - In middle, it shows screen share, raise hand icon button, reaction icon button mic icon button with available mics list, webcam icon button with available webcam list, and leave meeting icon button.
  - In right most corner, it shows poll icon button, chat icon button and partcipants icon with participant count.

  - When screen resolution change to mobile, tab or lg screen, the order of bottom bar elements changes to leave meeting button, recording button, mic & webcam button and `more actions` button.
  - On click of `more actions` button it opens a drawer that contains other remaining buttons.

<p align="center">
<img width="1352" src="public/ILSBottombar.png"/>
</p>

**3. TopBar**

- [`interactive-live-streaming/components/TopBar.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/TopBar.js): It contains the buttons that are displayed at top of the screen.

  - In right most corner, it shows recording button and start HLS button.

<p align="center">
<img width="1359" src="public/topbar.png"/>
</p>

**4. ILSParticipantView**

- [`interactive-live-streaming/components/ILSParticipantView.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/ILSParticipantView.js) - It contains the grid of participant that join as a host are displayed in the main screen.

<p align="center">
<img width="602" height="338" src="public/ILS_participant_view.png"/>
</p>

**5. HLSContainer**

- [`interactive-live-streaming/components/hlsViewContainer/HLSContainer.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/hlsViewContainer/HLSContainer.js) - It contains the `PlayerViewer` component with `react-motion`.

**6. PlayerViewer**

- [`interactive-live-streaming/components/hlsViewContainer/PlayerViewer.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/hlsViewContainer/PlayerViewer.js) - Untill host does not start live streaming viewer will see `Lottie`. When host start the live streaming, viewer will be able to see the live streaming.

<p align="center">
<img width="600" height="338" src="public/player_view.gif"/>
</p>

**7. CreatePoll**

- [`interactive-live-streaming/components/pollContainer/CreatePoll.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/pollContainer/CreatePoll.jss)

  - It has a text field to ask poll question, another text field where you can add your options, a checkbox to mark correct option and option to set timer.
  - In the bottom you can see save and launch button. If you click on save then your poll will be saved as a draft in the poll list and you can launch this draft poll any time during live streaming.
  - On click of launch button, you can ask poll immediately.

<p align="center">
<img width="359" height="574" src="public/create_poll.png"/>
</p>

**8. PollList**

- [`interactive-live-streaming/components/pollContainer/PollList.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/pollContainer/PollList.js) - It contains both types of polls:

1. Poll that are saved as a draft.
2. Poll that are launched during live streaming.

- You can create new polls with `create new poll` button.

<p align="center">
<img width="362" height="573" src="public/poll_list.png"/>
</p>

**9. SubmitPollList**

- [`interactive-live-streaming/components/pollContainer/SubmitPollList.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/pollContainer/SubmitPollList.js) - It contains viewer side poll view. Viewer can submit their opnion by selecting options.

<p align="center">
<img width="364" height="631" src="public/submit_poll_list.png"/>
</p>

**10. LocalParticipantListner**

- [`interactive-live-streaming/components/LocalParticipantListner.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/LocalParticipantListner.js) - It contains local participant pin state for host.

**11. PollListner**

- [`interactive-live-streaming/components/pollContainer/PollListner.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/pollContainer/PollListner.js) - It contains create a poll, submit a poll, end poll , draft a poll and remove poll from draft pubsub methods.

**12. ECommercePanel**

- [`interactive-live-streaming/components/ECommercePanel.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/ECommercePanel.js) - It contains product related details and viewer can buy product from here.

**13. Reactions**

- [`interactive-live-streaming/components/FlyingEmojisOverlay.js`](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/interactive-live-streaming/components/FlyingEmojisOverlay.js) - It contains emoji animation, functions for sending and receiving emoji using pubsub method.

<p align="center">
<img width="454" height="136" src="public/reaction.png"/>
</p>

## Examples

- [Prebuilt SDK Examples](https://github.com/videosdk-live/videosdk-rtc-prebuilt-examples)
- [JavaScript SDK Example](https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example)
- [React JS SDK Example](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example)
- [React Native SDK Example](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example)
- [Flutter SDK Example](https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example)
- [Android SDK Example](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example)
- [iOS SDK Example](https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example)

## Documentation

[Read the documentation](https://docs.videosdk.live/) to start using Video SDK.

## Community

- [Discord](https://discord.gg/Gpmj6eCq5u) - To get involved with the Video SDK community, ask questions and share tips.
- [Twitter](https://twitter.com/video_sdk) - To receive updates, announcements, blog posts, and general Video SDK tips.
