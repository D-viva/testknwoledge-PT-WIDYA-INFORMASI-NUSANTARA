rs.initiate({
  _id: "${MONGODB_REPLICA_SET_NAME}",
  members: [{ _id: 0, host: "${MONGODB_ADVERTISED_HOSTNAME}:27017" }],
});
