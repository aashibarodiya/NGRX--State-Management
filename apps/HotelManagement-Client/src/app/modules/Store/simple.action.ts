import { Action } from "@ngrx/store";

export class HindiGreet implements Action{
    readonly type="HINDI";
}

export class SpanishGreet implements Action{
    readonly type="SPANISH";
}

export class frenchGreet implements Action{
    readonly type="FRENCH";
}