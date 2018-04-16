  curl -H "Content-Type: application/json" -X POST --data "{\"postId\": \"$1\", \"name\": \"$2\", \"email\": \"$3\", \"body\": \"$4\"}" "http://jsonplaceholder.typicode.com/comments"
