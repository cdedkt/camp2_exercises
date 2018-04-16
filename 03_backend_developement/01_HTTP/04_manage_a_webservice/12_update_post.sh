  curl -H "Content-Type: application/json" -X PUT --data "{\"postId\": \"$1\", \"title\": \"$2\", \"body\": \"$3\"}" "http://jsonplaceholder.typicode.com/posts/$1"
