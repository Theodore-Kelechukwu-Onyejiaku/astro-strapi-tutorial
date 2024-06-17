import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAbout extends Schema.Component {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    aboutText: Attribute.String;
    aboutPhoto: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heroText: Attribute.String;
    heroDescription: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.about': AboutAbout;
      'hero.hero': HeroHero;
    }
  }
}
