declare type General =
  | '@UITest'
  | '@FunctionalTest';
declare type Priorities = '@P1' | '@P2' | '@P3' | '@P4';
declare type Sections = '@Login' | '@Routes';
declare type Subsections = '@InvalidLogin' | '@ValidLogin' | '@Routes';

declare type Tags = General | Priorities | Sections | Subsections;
