export namespace PropTypes {
  export interface HelloComponent {
    compiler?: string | null | undefined;
    framework?: string | null | undefined;
    foo?: | {foo: string} | null | undefined
  }
  export interface MyComponent {
    foo?: string | null | undefined;
    michael?: string | null | undefined;
    bar?:
      | {
          brielle?: string | null | undefined;
          baz?: { hello?: Array<string> | null | undefined } | null | undefined;
        }
      | null
      | undefined;
  }
  export interface testQuery {
    foo?: string | null | undefined;
    lol?: Array<string> | null | undefined;
    bar?: string;
    test?:
      | Array<{
          michael?: string;
          brielle?: string | null | undefined;
          robert?:
            | {
                itworks?: string | null | undefined;
                theresa?: string | null | undefined;
              }
            | null
            | undefined;
        }>
      | null
      | undefined;
    mom?:
      | {
          michael?: string;
          brielle?: string | null | undefined;
          robert?:
            | {
                itworks?: string | null | undefined;
                theresa?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    nestedNoName?:
      | {
          hasObject?: string | null | undefined;
          double?: { isDouble?: string | null | undefined } | null | undefined;
        }
      | null
      | undefined;
    firstName?: string | null | undefined;
    employees?:
      | {
          id?: string | null | undefined;
          employee_name?: string | null | undefined;
          employee_salary?: string | null | undefined;
          employee_age?: string | null | undefined;
          profile_image?: string | null | undefined;
        }
      | null
      | undefined;
  }
  export interface Hello extends HelloComponent {}
  export interface test extends MyComponent {}
  export interface bar extends MyComponent {}
}