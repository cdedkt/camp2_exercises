  curl -H "Content-Type: application/json" -X PUT --data "{\"postId\": \"$1\", \"body\": \"$2\"}" "http://jsonplaceholder.typicode.com/posts/$1"
