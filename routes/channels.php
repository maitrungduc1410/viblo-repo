<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

// Broadcast::channel('chatroom', function ($user) {
//     return $user; // here will return the guest user object
// });
Broadcast::channel('chatroom', function ($user) {
	return false;
    // return $user->id === Order::findOrNew($orderId)->user_id;
});

// Broadcast::channel('chatroom', function ($user) {
// 	return [
// 		'id' => $user->id,
// 		'name' => $user->name
// 	];
// });

