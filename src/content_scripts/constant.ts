enum Align {
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  CENTER = 'center',
  MIDDLE = 'middle',
}

const Aligns = [Align.TOP, Align.LEFT, Align.RIGHT, Align.BOTTOM, Align.CENTER, Align.MIDDLE];

enum Event {
  READY = 'slide/ready',
  KEYDOWN = 'slide/keydown',
  DATA = 'slide/data',
  INFO = 'slide/info',
  METHOD = 'slide/method',
}

enum Key {
  ESC = 27,
  LEFT = 37,
  UP = 38,
  RIGHT = 39,
  DOWN = 40,
  O = 79,
}

const Keys = [Key.ESC, Key.LEFT, Key.UP, Key.RIGHT, Key.DOWN, Key.O];

enum Theme {
  BLACK = 'black',
  WHITE = 'white',
  LEAGUE = 'league',
  BEIGE = 'beige',
  SKY = 'sky',
  NIGHT = 'night',
  SERIF = 'serif',
  SIMPLE = 'simple',
  SOLARIZED = 'solarized',
  BLOOD = 'blood',
  MOON = 'moon',
}

const Themes = [
  Theme.BLACK,
  Theme.WHITE,
  Theme.LEAGUE,
  Theme.BEIGE,
  Theme.SKY,
  Theme.NIGHT,
  Theme.SERIF,
  Theme.SIMPLE,
  Theme.SOLARIZED,
  Theme.BLOOD,
  Theme.MOON,
];

export { Align, Aligns, Event, Key, Keys, Theme, Themes };
