
# Sustainable Living (sustainable-living)

## Description 
Sustainable Living is designed to help students live more sustainable lives, even if they don’t want to. It offers sustainable living suggestions for a variety of user interests such as saving money, saving time and social networking. Sustainable Living incorporates gamification, awarding points in order to encourage users to participate. Points are given to users, for creating tips and events, completing tips, attending events and moderating content. Once users have earned points they can even compare their scores to other users via a leaderboard. 

## Implemented Features
1. Create an event - Users can submit an event into the system for approval by moderators. If the event is approved, the user will host the even with a QR code and users can attend for points.
2. Complete a tip - Users can browse tips in the system and work on completing them. When users complete a tip, they receive points. 
3. Attend an event - When users as phyiscally at events and find the QR code, they can scan it to prove they attended, and receive points.
4. Moderate Content - All tips and events that are created in the system need to be moderated before they can be public facing. Moderators have the task of approving and denying tips and events one by one, giving feedback whenever they deny a tip or event.
5. Compare scores on the leaderboard - As users get points they can see how their points stack up to other users on the leaderboard page.

## Usabilty and Quality Attributes
1. Supports small screen devices
2. Typical use time is a few minutes
3. Provides quick access (less than 3 clicks) to most frequently used features
4. Limits awkward and fatiguing movements by making all buttons large and grouped
5. Use of color to help user choose the right action
6. Give Feedback after every finished interaction
7. The Browser “back” button can be used for undo, it is always available

## Running the project

The project includes a live-reloading static server on port `8080` (you can change the port in the `gulpfile.js` config), which will build, launch, and rebuild the app whenever you change application code. To start the server, run:

```bash
$ npm start
```

If you prefer to just build without the live reload and build-on-each-change watcher, run:

```bash
$ npm run build
```


## Generating Additional Code

You can add additional functionality to your application by invoking the subgenerators included in the Flux Generator. You can add components using the following commands:

#### Components
```bash
$ yo flux:component ComponentName
```

#### Actions
```bash
$ yo flux:action ActionCreatorName
```

#### Stores
```bash
$ yo flux:store StoreName
```
