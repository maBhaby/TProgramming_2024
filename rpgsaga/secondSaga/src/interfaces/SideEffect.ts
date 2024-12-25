export interface SideEffectBehavior {
  activate(): void
}

export interface CallableSideEffect {
  new (params: any): SideEffectBehavior
}
