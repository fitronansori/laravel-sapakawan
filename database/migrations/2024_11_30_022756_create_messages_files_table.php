<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chat_messages_files', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('chat_id');
            $table->string('original_name');
            $table->string('file_name');
            $table->string('file_path');
            $table->string('file_size');
            $table->string('file_type');
            $table->uuid('sent_by_id');
            $table->text('deleted_in_id')->nullable();

            $table->timestamps();

            /**
             * Relasi ke tabel users
             */
            $table->foreign('chat_id')->references('id')->on('chat_messages')->onUpdate('cascade')->onDelete('cascade');

            /**
             * Relasi ke tabel chat_messages
             */
            $table->foreign('sent_by_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chat_messages_files');
    }
};
