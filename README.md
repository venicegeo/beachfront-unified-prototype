# beachfront-unified-prototype

This is a proof of concept showing what the repo structure and build process would look like if we merge Beachfront UI and API.

```bash

# develop (visit http://localhost:8080 in browser)
./scripts/install-dependencies.sh
./scripts/run-in-development-mode.sh

# build
./scripts/build.sh
```

## OAuth Strategy

1. Link to OAuth host
2. Redirect back from OAuth host with `?code=foo` in URL
3. API turns `code` into `apiKey`, injects into UI's HTML
4. UI takes `apiKey` from expected location and throws if missing
