# use

```
import { fetch, fetchJsonp } from 'fetch'

const a = async () => {
    try {
        const json = await fetch(url, data, options)
    } catch (e) {
        console.log(e)
    }
}

const b = async () => {
    try {
        const jsonp = await fetchJsonp(url, data, options)
    } catch (e) {
        console.log(e)
    }
}
```
