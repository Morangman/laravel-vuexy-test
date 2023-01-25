<?php

declare(strict_types = 1);

Route::get('list', [
    'as' => '.list',
    'uses' => 'ProductController@list',
]);

Route::post('', [
    'as' => '.store',
    'uses' => 'ProductController@store',
]);

Route::get('{product}/record', [
    'as' => '.record',
    'uses' => 'ProductController@record',
]);

Route::patch('{product}', [
    'as' => '.update',
    'uses' => 'ProductController@update',
]);

Route::delete('{product}/detete', [
    'as' => '.delete',
    'uses' => 'ProductController@delete',
]);