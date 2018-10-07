<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Role;
use App\User;

class userAddRole extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'role:user {mode} {user_id} {--role}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Manage user roles';

    protected $modes = [
      "Add role to user",
      "Revoke user's role",
      "Get user's roles",
      "Reset user's roles",
    ];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $role = $this->argument('role');
        $mode = $this->argument('mode');
        $userId = $this->argument('user_id');

        // check if we have such role available
        if (!$this->roleExists($role)) {
            return;
        }

        // check if the user exists
        $User = $this->getUserIfPresent($userId);

        switch ($mode) {
          case 'add':
            // check if user already has the role
            if ($this->alreadyHasTheRole($User, $role)) {
                return;
            }
            // save new user's role
            $this->addRole();
            break;
          case "revoke":
            // check if user already has the role
            if ($this->alreadyHasTheRole($User, $role)) {
              return;
            }
            // save new user's role
            $this->revokeRole($User->id, $role);
            break;
          default:
            $this->error("Error: something went wrong.");
            break;
        }


        
        // tell that we successfully added the role to the user
        $this->info("User with id {$userId} now has {$role} role!");
    }
    
    protected function roleExists($role)
    {
        if (!in_array($role, Role::roles)) {
            $this->error("Error!\nRole with name {$role} doesn't even exists!");
            return false;
        }
        return true;
    }

    protected function getUserIfPresent($userId)
    {
        $User = User::findOne($userId);
        if (!$User) {
            $this->error("Error!\nUser with id {$userId} doesn't even exists!");
        }
        return $User;
    }

    protected function alreadyHasTheRole($User, $role)
    {
        if (in_array($role, $User->getRoles())) {
            $this->error("Error!\nUser with id {$userId} already has {$role} role!");
            return true;
        }
        return false;
    }

    protected function addRole($userId, $role)
    {
        $Role = new Role;
        $Role->name = $role;
        $Role->user_id = $userId;
        return $Role->save();
    }

    protected function revokeRole($userId, $role)
    {
      // TODO: revoke the role
    }
}
