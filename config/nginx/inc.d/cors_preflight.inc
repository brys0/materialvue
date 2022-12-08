#
# OPTIONS indicates a CORS pre-flight request.
#
if ( $request_method = 'OPTIONS' ) {
  set $cors '${cors}o';
}