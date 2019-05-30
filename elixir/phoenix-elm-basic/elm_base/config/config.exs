# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :elm_base,
  ecto_repos: [ElmBase.Repo]

# Configures the endpoint
config :elm_base, ElmBase.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "h6CB5iut9nlLEEAgs2N0u4dp2DeaKGogg1D+zkBtkn5OTgQtyH/6RAoXBkOazB6Y",
  render_errors: [view: ElmBase.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ElmBase.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"