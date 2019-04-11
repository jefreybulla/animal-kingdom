import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const ANIMALS = [
  {
    id: 'cat',
    name: 'Cat',
    superpower: 'Has 9 lives.'
  },
  {
    id: 'dog',
    name: 'Dog',
    superpower: 'Catching frisbees.'
  },
  {
    id: 'lion',
    name: 'Lion',
    superpower: 'Roaring loudly.'
  }]

export const TERRITORIES = [
  {
    id: 'forest',
    name: 'Forest',
    superpower: 'Trees!'
  },
  {
    id: 'tundra',
    name: 'Tundra',
    superpower: 'Let it snow!'
  },
  {
    id: 'mountains',
    name: 'Mountains',
    superpower: 'The green eye!'
  }
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  {
    app: 'http://localhost:3001',
    ruler: 'larz.id'
  },
  {
      app: 'https://thirsty-jang-0c0a17.netlify.com',
      ruler: 'ma1222042.id.blockstack'
  },
  {
  app: 'https://animalkingdoms.netlify.com',
  ruler: 'moxiegirl.id.blockstack'
  }
]
