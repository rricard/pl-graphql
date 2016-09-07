# PL/GRAPHQL

PL/GRAPHQL is an execution engine built on top of the [GraphQL](https://graphql.org) language. Its goal is to use a procedural and sequential execution engine to resolve JavaScript functions. PL/GRAPHQL is highly experimental and unstable and may very much be a really stupid idea. However, my goal is to ultimately be able to use it as a test runner DSL.

## Example

```graphql
procedure GoogleSearch($query: String!, $assertResult: String!, $_googleResult: String) {
  navigateTo(url: "https://google.com") {
    with(select: "input") {
      setValueTo(value: $query)
    }
    with(select: "form") {
      submit {
        _googleResult: body
      }
    }
  }
  assert(presenceOf: $assertResult, in: $_googleResult)
}
```

with the following variables:

```json
{
  "query": "GraphQL",
  "assertResult": "PL/GRAPHQL"
}
```

will give you this result:

```json
{
  "navigateTo": {
    "with": {
      "submit": {
        "_googleResult": "<!doctype html>/*...*/",
      }
    }
  },
  "assert": false,
}
```

> **Note** PL/GRAPHQL considers a selection set as an _ordered_ list of statement when GraphQL execution engine does not.

> **Note** PL/GRAPHQL _accepts duplicate field_ accesses in a same selection set, the latest resolved field will be the one assigned in the execution result.

> **Note** PL/GRAPHQL _assigns_ sequentially results in a variable with matching name and type as a field or alias
