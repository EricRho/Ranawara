require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get ranawara" do
    get :ranawara
    assert_response :success
  end

  test "should get activities" do
    get :activities
    assert_response :success
  end

  test "should get gallery" do
    get :gallery
    assert_response :success
  end

  test "should get availability" do
    get :availability
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get FAQ" do
    get :FAQ
    assert_response :success
  end

end
