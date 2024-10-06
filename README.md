# Google Place Autocomplete App

A simple React Native application that allows users to search for places using Google Places Autocomplete and display selected places on a map. The application uses Redux for state management and Ant Design for UI components.

## Features

- **Autocomplete Search**: Users can search for places, and the results are fetched from the Google Places API.
- **Display on Map**: Selected places are displayed on a map.
- **State Management**: Uses Redux to manage the search results and user selections.
- **UI Components**: Utilizes Ant Design for a sleek and user-friendly interface.

## Technologies Used

- React Native
- Redux
- Redux Thunk
- Google Places API
- Ant Design

## Installation

### Prerequisites

- Node.js installed
- React Native CLI installed
- An Android or iOS device or emulator

### Clone the Repository

```bash
git clone https://github.com/hafizah-yusof/GooglePlaceAutoComplete.git
cd GooglePlaceAutoComplete
```

### Install Dependencies

```bash
yarn install
```


### Setup Google Places API
- Go to the Google Cloud Console.

- Create a new project and enable the Places API and Maps SDK for Android.

- Generate an API key and restrict it for your application.

- Add the API key in android/app/src/main/AndroidManifest.xml:

```bash
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_API_KEY"/>
```

### Run the App
- Make sure to rebuild the app after making changes:

```bash
npx react-native run-android
```

```bash
npx react-native run-ios
```

### Usage
- Open the app, and you will see a search bar.
- Type in the name of a place, and the autocomplete suggestions will appear.
- Select a place from the suggestions, and it will be displayed on the map.
- Redux Configuration
- This app uses Redux for state management. The state includes the search results and the selected place. The implementation details can be found in the src/store directory.


### Credits
- This project is developed from scracth by Hafizah Yusof Sabri.

### Acknowledgments
- React Native
- Redux
- Ant Design
- Google Places API