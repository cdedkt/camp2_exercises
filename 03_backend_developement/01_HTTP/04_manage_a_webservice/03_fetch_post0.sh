curl 'http://jsonplaceholder.typicode.com/posts' | jq 'map(select(.id==1))'
