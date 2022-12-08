#
# General proxy directives.
#
proxy_http_version                  1.1;

proxy_hide_header                   X-Powered-By;
proxy_hide_header                   Access-Control-Allow-Origin;

proxy_headers_hash_max_size         512;
proxy_headers_hash_bucket_size      128;

proxy_set_header                    HOST                           $host:$proxy_port;
proxy_set_header                    Connection                     '';
proxy_set_header                    X-Real-IP                      $remote_addr;
proxy_set_header                    X-Forwarded-For                $proxy_add_x_forwarded_for;
proxy_set_header                    X-NGinx-Proxy                  true;
proxy_set_header                    X-Forwarded-Proto              https;

proxy_pass_header                   Range;
proxy_pass_header                   Cookie;
proxy_pass_header                   Set-Cookie;
proxy_pass_header                   P3P;

#
# Setup the proxy buffering directives.
#
# proxy_buffering                     on;
# proxy_buffer_size                   8k;
# proxy_temp_file_write_size          16k;
# proxy_temp_path                     /node/files;