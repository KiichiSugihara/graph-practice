//  Write your query or mutation here
mutation newPhoto($input: PostPhotoInput!) {
  postPhoto(input:$input){
    id
    name
    url
    description
    category
  }
}
