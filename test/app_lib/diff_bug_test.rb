#!/bin/bash ../test_wrapper.sh
require_relative './AppLibTestBase'
  test '930827',
  'another specific real dojo that once failed a diff' do
  test '9DC0FD',
  'specific real dojo that fails diff show narrowing' do
      "+  test 'each_pair'",
    refute_equal [ ], nils