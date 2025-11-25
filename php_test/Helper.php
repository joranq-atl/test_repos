<?php

namespace App\Utils;

class Helper {
    public static function formatString($str) {
        return strtoupper(trim($str));
    }

    public static function validateInput($input) {
        return !empty($input) && strlen($input) < 100;
    }
}

function processData($data) {
    $result = [];
    foreach ($data as $item) {
        $result[] = Helper::formatString($item);
    }
    return $result;
}

class DataProcessor {
    private $data = [];

    public function addData($item) {
        $this->data[] = $item;
    }

    public function process() {
        return processData($this->data);
    }

    public function validate($input) {
        return Helper::validateInput($input);
    }
}
