class PagesController < ApplicationController
  def index

  end

  private def contact_params
  params.require(:contacts).permit(:name, :email, :number, :message)
  end

end
