#
# If request comes from `www` subdomain.
#
if ( $http_origin ~ ^(https://www\.domain\.com)$ ) {
  set $cors '1';
}