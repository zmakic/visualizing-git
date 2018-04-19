define([], function () {

  var upstreamChanges = {
    title: 'Upstream Changes',
    key: 'upstream-changes',
    message: 'Someone else has been working here!',
    commitData: [
      {
        "id": "e137e9b",
        "tags": ["master", "origin/master"],
        "message": "first commit",
        "parent": "initial",
      }
    ],
    originData: [
      {
        "id": "e137e9b",
        "tags": [],
        "message": "first commit",
        "parent": "initial",
      }
    ]
  }

  return [
    upstreamChanges
  ]
})
