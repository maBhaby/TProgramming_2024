export interface Observable {
  add(): void
  remove(): void
  notify(): void
}

export interface Observer {
  update(): void
}
