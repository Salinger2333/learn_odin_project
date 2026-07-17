type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type createMutable<Type> = {
  -readonly [Prop in keyof Type]: Type[Prop];
};

type unlockedAccount = createMutable<LockedAccount>;

type Concrete<Type> = {
  [Prop in keyof Type]-?: Type[Prop];
};
type MaybeUser = {
  id: string;
  name?: string;
  age?: string;
};

type ConcreteUser = Concrete<MaybeUser>;

// as

type Getters<Type> = {
  [Prop in keyof Type as `get${Capitalize<Prop & string>}`]: Type[Prop];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type GetPerson = Getters<Person>;

// Exclude
type RemoveKindField<Type> = {
  [Prop in keyof Type as Exclude<Prop, "kind">]: Type[Prop];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string }> = {
  [Event in Events as Event["kind"]]: (event: Event) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;
