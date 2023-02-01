#
# Append CORS headers to any request from
# allowed CORS domain, except OPTIONS
#
if ($cors = '1') {
  more_set_headers                 'Access-Control-Allow-Origin: $http_origin';
  more_set_headers                 'Access-Control-Allow-Credentials: true';
}