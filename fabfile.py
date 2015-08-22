import os
import shutil

from coat.wordpress import *
import errno
from fabric.api import *
from coat import wordpress
import os.path

env.wordpress_name = "website"
env.local_base_path = os.path.dirname(os.path.abspath(__file__))
env.colorize_errors = True


def env_test():
    update_env(
        user="coniuro",
        hosts=["peewee.coniuro.net"],
        base_dir="/home/coniuro/clients/tv2/test/test-topgunn",
        wordpress_path="public_html",
        settings_file="wp-config-test.php",
        local_wordpress_path="public_html",
    )

def env_live():
    update_env(
        user="bitnami1",
        password="S4La1^GV}<%8",
        hosts=["bitnami-wordpress-50d6.cloudapp.net"],
        base_dir="/home/bitnami1/apps/wordpress",
        wordpress_path="htdocs",
        settings_file="wp-config-live.php",
        local_wordpress_path="public_html",
    )
