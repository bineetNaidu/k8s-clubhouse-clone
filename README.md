# k8s-clubhouse-clone

A clubhouse clone with a microservice archistructure (docker + k8s).

## Plans

- [ ] basic authentications stuffs.
- [ ] users can view all rooms.
- [ ] user can scheduled a room.
  - [ ] can create room.
  - [ ] can delete room.
  - [ ] can update room.
- [ ] users join rooms when its live.
- [ ] users can follow each other.
- Rooms plans
  - [ ] users can speak
  - [ ] users can add moderators to rooms.
    - [ ] mods can mute users
    - [ ] mods can ban users
    - [ ] mods can remove a users
  - [ ] joined user can request to speak.
  - [ ] users can chat in rooms.

## Usage

```zsh
skaffold dev
```

## TechStacks

- FontEnd - [Next.js](https://nextjs.org/)
- UI Framework - [Chakra UI](https://chakra-ui.com/)
- Backends - [Nodejs](https://nodejs.org/), [Expressjs](http://expressjs.com/)
- Databases - [PostgreSQL](https://www.postgresql.org/), [Redis](https://redis.io/)
- Orchestrating with - [Docker](https://docker.com/), [kubernetes](https://kubernetes.io/)
- Toolings - [Skaffold](https://skaffold.dev/), [create-ts-api](https://github.com/bineetNaidu/create-ts-api)

## Authors

- [@bineetNaidu](https://github.com/bineetNaidu)

## License

[MIT](https://choosealicense.com/licenses/mit/)
