#
# Setup the GeoIP headers.
#
proxy_set_header            GEOIP_COUNTRY_CODE              $geoip2_data_country_code;
proxy_set_header            GEOIP_COUNTRY_NAME              $geoip2_data_country_name;
proxy_set_header            GEOIP_CITY_NAME                 $geoip2_data_city_name;
proxy_set_header            GEOIP_TIMEZONE                  $geoip2_data_time_zone;