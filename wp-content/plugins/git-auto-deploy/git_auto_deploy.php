<?php

/**
 * Plugin Name: Auto Deploy (git)
 * Description: recibe una llamada de un hoock y hace pull al repositorio
 * Author: Jean Paul Carvajal 
 * Author URI: https://jeanpidev.com
 * Version: 1.0.0
 * Text Domain: AutoDeploy
 * Tested up to: 6.2
 *
 *
 * You should have received a copy of the GNU General Public License
 * along with CoBlocks. If not, see <http://www.gnu.org/licenses/>.
 *
 * @package AutoDeploy
 */
define('auto_deploy__FILE__', __FILE__);
define('auto_deploy', trim(auto_deploy__FILE__, "calendario-ucr.php"));
define('auto_deploy_BASE', plugin_basename(auto_deploy__FILE__));
define('auto_deploy_URL', plugins_url('/', auto_deploy__FILE__));

function my_awesome_func($x)
{
    $commit = shell_exec('git commit -a -m "content from producction before pull" ');
    $push = shell_exec('git push');
    $pull = shell_exec('git pull');
    $status = shell_exec('git status');
    header('Content-type: application/json');
    $data = [
        "comit" => $commit,
        "push" => $push,
        "pull" => $pull,
        "status" => $status,
        "status" => 200
    ];
    $json = json_encode($data);
    if ($json === false) {

        $json = json_encode(["jsonError" => json_last_error_msg()]);
        if ($json === false) {

            $json = '{"jsonError":"unknown"}';
        }

        return new WP_Error('json_error', "error", array('status' => 500));
    }
    echo $json;
}

add_action('rest_api_init', function () {
    register_rest_route('auto_deploy/v1', '/pull/', array(
        'methods' => 'POST',
        'callback' => 'my_awesome_func',
    ));
});


function auto_deploy_init_adminPage()
{
    if (is_admin()) add_action('admin_menu', 'auto_deploy_create_menu');
}


function auto_deploy_create_menu()
{

    //create new top-level menu
    add_menu_page('Auto Deploy', 'AutoDeploy', 'administrator', __FILE__, 'auto_deploy_page', auto_deploy_URL . '/assets/ico.png');

    //call register settings function
    add_action('admin_init', 'register_atuo_deploy_plugin_settings');
}


function register_atuo_deploy_plugin_settings()
{
    //register our settings
    register_setting('baner-ucr-settings-group', 'all_data');
}

function auto_deploy_page()
{
    if (is_admin()) {
        #wp_enqueue_style('baners-css', Baners_URL . '/admin/style.css');
    }
?>
    <h1>Auto Deploy</h1>
<?php
}
auto_deploy_init_adminPage();
