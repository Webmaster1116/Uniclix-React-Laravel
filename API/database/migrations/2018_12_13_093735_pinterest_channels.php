<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PinterestChannels extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("pinterest_channels", function(Blueprint $table){
            $table->increments("id");
            $table->integer("user_id")->unsigned();
            $table->integer("channel_id")->unsigned();
            $table->string("name")->nullable();
            $table->string("username")->nullable();
            $table->text("payload")->nullable();
            $table->boolean("selected")->default(0);
            $table->string("access_token", 500);
            $table->timestamps();

            $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");
            $table->foreign("channel_id")->references("id")->on("channels")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("pinterest_channels");
    }
}
