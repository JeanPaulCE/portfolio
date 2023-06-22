
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
    $output = shell_exec('git pull');

    header('Content-type: application/json');
    $data = [
        "comit" => $commit,
        "response" => $output,
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
        'methods' => 'GET',
        'callback' => 'my_awesome_func',
    ));
});
