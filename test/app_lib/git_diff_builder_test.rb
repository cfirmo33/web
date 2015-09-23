#!/bin/bash ../test_wrapper.sh
require_relative './AppLibTestBase'
  test 'A332D7',
  'chunk with a space in its filename' do
  test '45733C',
  'chunk with defaulted now line info' do
  test 'D19F10',
    'two chunks with leading and trailing same lines' +
  test '2191C8',
    'diffs 7 lines apart are not merged' +
  test '3F8C58',
    'one chunk with two sections' +
  test '50C56A',
  'one chunk with one section with only lines added' do
  test '386FA0',
  'one chunk with one section with only lines deleted' do
  test '970ED0',
    'one chunk with one section' +
  test '56BCAD',
    'one chunk with one section' +
  test 'A42951',
    'one chunk with one section' +