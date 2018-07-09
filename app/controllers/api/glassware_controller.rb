class Api::GlasswareController < ApplicationController
  # brewery_db.glassware.all
  def token
    render json: ENV['BREWERYDB_API_KEY']
  end
  
  def all
    send_response(brew_client.glassware.all(p: @page))
  end
end
