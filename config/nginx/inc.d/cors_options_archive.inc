#
# OPTIONS (pre-flight) request from allowed CORS domain.
#
if ($cors = '1o') {
  more_set_headers                 'Access-Control-Allow-Origin: $http_origin';
  more_set_headers                 'Access-Control-Allow-Credentials: true';
  more_set_headers                 'Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS';
  more_set_headers                 'Access-Control-Allow-Headers: Authorization, Accept, Origin, DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Pragma, Content-Type, Content-Range, Range, X-XSRF-TOKEN';
  more_set_headers                 'Access-Control-Max-Age: 1728000';

  more_set_headers                 'Content-Length: 0';
  more_set_headers                 'Content-Type: application/json';

  return 204;
}